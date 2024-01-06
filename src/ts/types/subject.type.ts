export type SubjectType = {
  _id: string;
  levels: number[];
  position: number;
  thumbnail: string;
  title: string;
  major: string;
  createdAt: Date;
  updatedAt: Date;
  slug: string;
};

export type SubjectData = Partial<
  Pick<SubjectType, '_id' | 'title' | 'levels'>
>;

export type ResponseDatas = {
  data: SubjectData[];
};
