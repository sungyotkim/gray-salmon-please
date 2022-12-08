import React, { useRef, useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok: boolean;
  i: number;
  fn: () => void; //number, string, etc or void if expecting no return
  fn2: (num: number) => string;
  obj: {
    f1: string;
  };
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PracticeTemplate: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<number | null | undefined>(5); // This state can be a number or null. Note: undefined is different than null so you have to specify

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input type="text" ref={inputRef} onChange={handleChange} />
    </div>
  );
};
