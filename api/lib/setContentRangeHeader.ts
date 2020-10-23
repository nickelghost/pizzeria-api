import { Response } from 'express';

const setContentRangeHeader = (
  res: Response,
  from: number,
  to: number,
  total: number,
) => {
  res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
  res.setHeader('Content-Range', `carousel-items ${from}-${to}/${total}`);
};

export default setContentRangeHeader;
