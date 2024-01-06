export type ScoreBoard = {
  results: UserScore[];
};

export type UserScore = {
  _id: string;
  dateTime: number;
  idUser: {
    _id: string;
    avatar: string;
  };
  createdAt: string;
  details: [
    {
      score: number;
      _id: string;
    },
  ];
  score: number;
  updatedAt: string;
  id: string;
};
