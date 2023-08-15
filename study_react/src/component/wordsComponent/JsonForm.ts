export interface IProps {
	word: IWord;
}

export interface IWord {
	id: number;
	day: string;
	eng: string;
	kor: string;
	isDone: boolean;
}

export interface IDay {
	id: number;
	day: number;
}
