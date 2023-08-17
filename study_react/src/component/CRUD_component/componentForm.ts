type ArticleProps = {
	title: string;
	body: string;
};

type HeaderProps = {
	title: string;
	onChangeMode: () => void;
};

type CreateProps = {
	onCreate: (title: string, body: string) => void;
};

type UpdateProps = {
	onUpdate: (title: string, body: string) => void;
	title: string;
	body: string;
};

type TopicProps = {
	id: number;
	title: string;
	body: string;
};

type NavProps = {
	onChangeMode: (id: number) => void;
	topics: TopicProps[];
};

type MyComponentProps = {
	mode: string;
	topics: Array<TopicProps>;
	id: number;
	nextId: number;
	onChangeMode: (mode: string) => void;
	onChangeTopics: (topics: Array<TopicProps>) => void;
	onChangeId: (id: number) => void;
	onChangeNextId: (nextId: number) => void;
};
