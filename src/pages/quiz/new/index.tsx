import React from "react";
import { useRouter } from 'next/router';

interface Props {}

const optionData = [
  {
    label: "Option A:",
  },
  {
    label: "Option B:",
  },
  {
    label: "Option C:",
  },
  {
    label: "Option D:",
  },
];

const answerOption = [
  {
    label: "A",
    answer: 0,
  },
  {
    label: "B",
    answer: 1,
  },
  {
    label: "C",
    answer: 2,
  },
  {
    label: "D",
    answer: 3,
  },
];

const Index = (props: Props) => {

    const router= useRouter()

  return <div></div>;
};

export default Index;
