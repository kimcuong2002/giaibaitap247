export type QuestionType = {
  _id: string;
  imageText: string;
  lang: string;
  nation: string;
  hadCallChatGPT: boolean;
  dateTime: string;
  statusReport: string;
  followers: [];
  likes: [];
  isComment: boolean;
  totalViewsa: number;
  isFirstQuestion: boolean;
  status: string;
  images: [];
  text: string;
  score: number;
  isDeleted: boolean;
  isDoublePoint: false;
  level: number;
  subject: Subject;
  idUser: string;
  answers: [];
  comments: [];
  reports: [];
  savers: [];
  createdAt: string;
  updatedAt: string;
  id: string;
};

type Subject = {
  idSubject: string;
  title: string;
  _id: string;
};
