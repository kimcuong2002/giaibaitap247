export type UserType = {
  subscribePackage: SubscribePackage;
  _id: string;
  notificationTime: number;
  countRewardLogin: number;
  levelType: string;
  receivedNotificationTypes: [];
  lang: string;
  isPreventAnswer: boolean;
  isPreventAsk: boolean;
  isRateApp: boolean;
  totalBestStars: number;
  totalLikes: number;
  totalCorrectAnswers: number;
  totalReports: number;
  totalBestAnswers: number;
  totalAnswers: number;
  totalQuestion: number;
  experienceLevel: string;
  totalScore: number;
  idMedals: string[];
  description: string;
  isDeleted: boolean;
  fcmTokens: [];
  deviceID: string;
  isEnableFCM: boolean;
  typeTokenLogin: string;
  dateOfBirth: number;
  gender: string;
  avatar: string;
  street: string;
  email: string;
  phone: string;
  fullName: string;
  userName: string;
  role: string;
  school: string;
  groupAPIDenines: [];
  groupAPIAccesses: [];
  groups: [];
  receiptAccounts: [
    {
      _id: string;
    },
  ];
  subjectsAnswered: [];
  groupDetails: [];
  createdAt: string;
  updatedAt: string;
  slug: string;
  idDistrict: string;
  idProvince: string;
  level: number;
  countFreeCreateQuestions: number;
};

export type SubscribePackage = {
  statusPremium: string;
  type: string;
  startDate: number;
  endDate: number;
};
