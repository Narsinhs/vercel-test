// pages/api/transform.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Define the path to your source JSON file

  const sourceFilePath = path.join(process.cwd(), 'src' , 'source', 'input.json');
  console.log(sourceFilePath , "sourceFilePath")
  try {
    console.log(sourceFilePath ,"logme!")
    // Read the source JSON file
    const sourceData = JSON.parse(fs.readFileSync(sourceFilePath, 'utf-8'));


    // Perform data mappings and transformations
    const transformedData = mapAndTransformData(sourceData);

    // Send the transformed data as a JSON response
    res.status(200).json(transformedData);
  } catch (error) {
    console.log(error ,"ERROR")
    res.status(500).json({ error: 'Failed to read and transform data.' });
  }
};

function mapAndTransformData(sourceData: any[]) {
    console.log(sourceData , "sourcedata")

  return sourceData;
}
