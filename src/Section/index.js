import { StyledSection, Header, Title, SectionBody } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
	<StyledSection>
		<Header>
			<Title>{title}</Title>
			{extraHeaderContent}
		</Header>
		<SectionBody>{body}</SectionBody>
	</StyledSection>
);

export default Section;