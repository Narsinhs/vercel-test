// pages/api/transform.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Define the path to your source JSON file
  const sourceFilePath = __dirname + '../../source/input.json';

  try {
    // Read the source JSON file
    const sourceData = JSON.parse(fs.readFileSync(sourceFilePath, 'utf-8'));

    // Perform data mappings and transformations
    const transformedData = mapAndTransformData(sourceData);

    // Send the transformed data as a JSON response
    res.status(200).json(transformedData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read and transform data.' });
  }
};

function mapAndTransformData(sourceData: any[]) {
    console.log(sourceData , "sourcedata")

  return sourceData;
}
