import styled from 'styled-components';

const ProgressWrapper = styled.div`
	position: absolute;
	box-sizing: border-box;
	background-color: red;
	width: 100%;
	height: 100%;
	${props => props.theme.progress.style};
`;

export default ProgressWrapper;
