import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { Document, HeadingLevel, Packer, Paragraph, TextRun } from 'docx';
import PDFDocument from 'pdfkit';

import {
  education,
  experience,
  languages,
  personalInfo,
  projects,
  softSkills,
  technicalSkills,
} from '../src/data/portfolio.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

const resolvePublicFile = (fileName: string | undefined, fallback: string): string => {
  const safeName = (fileName || fallback).replace(/^[/\\]+/, '');
  return path.join(publicDir, safeName);
};

const pdfPath = resolvePublicFile(personalInfo.cvPdfFile || personalInfo.cvFile, 'cv-salma-fennane.pdf');
const docxPath = resolvePublicFile(personalInfo.cvWordFile, 'cv-salma-fennane.docx');

const buildContactLine = (): string => {
  const emailText = personalInfo.emails.join(' | ');
  const contactParts = [
    personalInfo.location,
    personalInfo.phone,
    emailText,
  ].filter(Boolean) as string[];

  return contactParts.join(' | ');
};

const ensurePdfSpace = (doc: InstanceType<typeof PDFDocument>, requiredHeight = 60): void => {
  const bottomLimit = doc.page.height - doc.page.margins.bottom;
  if (doc.y + requiredHeight > bottomLimit) {
    doc.addPage();
  }
};

const writePdfHeading = (doc: InstanceType<typeof PDFDocument>, title: string): void => {
  ensurePdfSpace(doc, 50);
  doc.moveDown(0.8);
  doc.font('Helvetica-Bold').fontSize(14).fillColor('#1f3a8a').text(title);
  doc.moveDown(0.2);
  doc.font('Helvetica').fontSize(10).fillColor('#111111');
};

const writePdfBullet = (doc: InstanceType<typeof PDFDocument>, text: string): void => {
  ensurePdfSpace(doc, 34);
  doc.text(`- ${text}`, {
    indent: 10,
    paragraphGap: 3,
    lineGap: 1,
  });
};

const generatePdf = async (): Promise<void> => {
  await fs.promises.mkdir(path.dirname(pdfPath), { recursive: true });

  const doc = new PDFDocument({
    size: 'A4',
    margin: 50,
    info: {
      Title: `CV ${personalInfo.firstName} ${personalInfo.lastName}`,
      Author: `${personalInfo.firstName} ${personalInfo.lastName}`,
    },
  });

  const stream = fs.createWriteStream(pdfPath);
  doc.pipe(stream);

  doc.font('Helvetica-Bold').fontSize(24).fillColor('#0f172a').text(`${personalInfo.firstName} ${personalInfo.lastName}`);
  doc.font('Helvetica').fontSize(13).fillColor('#334155').text(personalInfo.title);
  doc.moveDown(0.4);
  doc.fontSize(10).fillColor('#111111').text(buildContactLine());

  writePdfHeading(doc, 'Profil');
  for (const paragraph of personalInfo.bio) {
    writePdfBullet(doc, paragraph);
  }

  writePdfHeading(doc, 'Competences techniques');
  for (const category of technicalSkills) {
    writePdfBullet(doc, `${category.title}: ${category.skills.join(', ')}`);
  }

  writePdfHeading(doc, 'Soft skills');
  for (const skill of softSkills) {
    writePdfBullet(doc, `${skill.name}: ${skill.description}`);
  }

  writePdfHeading(doc, 'Formation');
  for (const item of education) {
    writePdfBullet(
      doc,
      `${item.period} - ${item.degree}, ${item.field}, ${item.institution}. ${item.description}`,
    );
  }

  writePdfHeading(doc, 'Experience');
  for (const item of experience) {
    writePdfBullet(doc, `${item.period} - ${item.role}, ${item.company}. ${item.description}`);
  }

  writePdfHeading(doc, 'Projets');
  for (const item of projects) {
    writePdfBullet(doc, `${item.title}: ${item.description} (Tech: ${item.tags.join(', ')})`);
  }

  if (languages.length > 0) {
    writePdfHeading(doc, 'Langues');
    for (const language of languages) {
      writePdfBullet(doc, `${language.name}: ${language.level}`);
    }
  }

  doc.end();

  await new Promise<void>((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
};

const createHeading = (title: string): Paragraph =>
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [new TextRun({ text: title, bold: true })],
    spacing: { before: 240, after: 120 },
  });

const createBullet = (text: string): Paragraph =>
  new Paragraph({
    text,
    bullet: { level: 0 },
    spacing: { after: 100 },
  });

const generateDocx = async (): Promise<void> => {
  await fs.promises.mkdir(path.dirname(docxPath), { recursive: true });

  const docChildren: Paragraph[] = [
    new Paragraph({
      text: `${personalInfo.firstName} ${personalInfo.lastName}`,
      heading: HeadingLevel.TITLE,
    }),
    new Paragraph({
      text: personalInfo.title,
      spacing: { after: 120 },
    }),
    new Paragraph({
      text: buildContactLine(),
      spacing: { after: 220 },
    }),

    createHeading('Profil'),
    ...personalInfo.bio.map(createBullet),

    createHeading('Competences techniques'),
    ...technicalSkills.map((category) =>
      createBullet(`${category.title}: ${category.skills.join(', ')}`),
    ),

    createHeading('Soft skills'),
    ...softSkills.map((skill) => createBullet(`${skill.name}: ${skill.description}`)),

    createHeading('Formation'),
    ...education.map((item) =>
      createBullet(
        `${item.period} - ${item.degree}, ${item.field}, ${item.institution}. ${item.description}`,
      ),
    ),

    createHeading('Experience'),
    ...experience.map((item) =>
      createBullet(`${item.period} - ${item.role}, ${item.company}. ${item.description}`),
    ),

    createHeading('Projets'),
    ...projects.map((item) =>
      createBullet(`${item.title}: ${item.description} (Tech: ${item.tags.join(', ')})`),
    ),
  ];

  if (languages.length > 0) {
    docChildren.push(createHeading('Langues'));
    docChildren.push(...languages.map((language) => createBullet(`${language.name}: ${language.level}`)));
  }

  const doc = new Document({
    sections: [
      {
        children: docChildren,
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  await fs.promises.writeFile(docxPath, buffer);
};

const run = async (): Promise<void> => {
  await generatePdf();
  await generateDocx();
  console.log(`Generated CV files: ${path.basename(pdfPath)} and ${path.basename(docxPath)}`);
};

run().catch((error) => {
  console.error('Failed to generate CV files:', error);
  process.exit(1);
});
