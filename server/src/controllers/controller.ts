import { Request, Response } from 'express';

export const getExample = (req: Request, res: Response) => {
  res.send('My name is Izuchukwu Obi. My friends call me Izu. I am an applicant for the Vivacity Software Engineering Program. Hurray!');
};

export const postExample = (req: Request, res: Response) => {

  const data = req.body;

  res.json(data);
};
