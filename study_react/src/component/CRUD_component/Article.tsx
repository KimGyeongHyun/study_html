type ArticleProps = {
	title: string;
	body: string;
};

// topics 의 내용을 하나 가져와 출력
// mode 가 "WELCOME", "READ" 일 때 content 출력에 사용
const Article = ({ title, body }: ArticleProps) => {
	return (
		<article>
			<h2>{title}</h2>
			{body}
		</article>
	);
};

export default Article;
