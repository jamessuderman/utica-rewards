"use server";

import * as fs from 'node:fs';
import {saveProgram} from '@/data/programs';

export async function createProgram(formData: FormData) {
  const imageFile = formData.get('programImage') as File;
  const imagePath = `/assets/images/${imageFile.name}`;

  const stream = fs.createWriteStream(`public${imagePath}`);
  const imageBuffer = await imageFile.arrayBuffer();
  stream.write(Buffer.from(imageBuffer), (error) => {
    if(error) {
      throw new Error("Saving image failed!");
    }
  });

  const program = {
    id: null,
    title: formData.get('title').toString(),
    description: formData.get('description').toString(),
    image: imagePath,
  }

  await saveProgram(program)
}
