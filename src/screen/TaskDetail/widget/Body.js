import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import { GlobalStyle } from '@utils/styles';
import { scaleWidth, scaleHeight } from '@utils';
import images from '@assets/images';
import { ScrollView,View } from 'react-native';
import { Comment, Item, Message, PopupStatus, TaskName, TimeTracking, Top } from './component';
import {
	PopupPriority,
	PopupDueDate,
	PopupEstimate,
	PopupAttachment,
	PopupAssigned
} from '@screen/TaskAdd/widget/component';

export default class Body extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			status: 'Done',
			isVisiblePopupStatus: false,
			isPopupPriority: false,
			isPopupAssign: false,
			isPopupAttachment: false,
			isPopupEstimate: false,
			isPopupDueDate: false
		};
		this.PopupStatus = React.createRef();
		this.Priority = React.createRef();
		this.Assign = React.createRef();
		this.Attachment = React.createRef();
		this.Estimate = React.createRef();
		this.DueDate = React.createRef();
	}

	togglePopupStatus = () => {
		const { isVisiblePopupStatus } = this.state;
		this.setState({
			isVisiblePopupStatus: !isVisiblePopupStatus
		});
	};

	setStatus = (status) => {
		this.setState({ status });
		this.togglePopupStatus();
	};

	togglePopupDueDate = () => {
		const { isPopupDueDate } = this.state;
		this.setState({
			isPopupDueDate: !isPopupDueDate
		});
	};

	togglePopupAssign = () => {
		const { isPopupAssign } = this.state;
		this.setState({
			isPopupAssign: !isPopupAssign
		});
	};

	togglePopupAttachment = () => {
		const { isPopupAttachment } = this.state;
		this.setState({
			isPopupAttachment: !isPopupAttachment
		});
	};

	togglePopupEstimate = () => {
		const { isPopupEstimate } = this.state;
		this.setState({ isPopupEstimate: !isPopupEstimate });
	};

	togglePopupPriority = () => {
		const { isPopupPriority } = this.state;
		this.setState({ isPopupPriority: !isPopupPriority });
	};

	render() {
		const {
			isVisiblePopupStatus,
			isPopupDueDate,
			isPopupAssign,
			isPopupAttachment,
			isPopupEstimate,
			isPopupPriority,
			status
		} = this.state;
		return (
			<Container>
				<ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
					<Top status={status} togglePopupStatus={this.togglePopupStatus} />
					<TaskName />
					<Description>Description</Description>
					<Item icon={images.Priority} onPress={this.togglePopupPriority} content="Immediate" />
					<Item icon={images.DueDate} onPress={this.togglePopupDueDate} content="Due date..." />
					<Item icon={images.UnAssigned} onPress={this.togglePopupAssign} content="Nam phan" />
					<Item icon={images.Attachment} onPress={this.togglePopupAttachment} content="Attachment" />
					<TimeTracking />
					<Comment />
				</ScrollView>

				<Message />

				<View style={{height: scaleHeight(8)}} />

				<PopupStatus isVisible={isVisiblePopupStatus} onPressDone={(status) => this.setStatus(status)} />
				<PopupPriority ref={this.Priority} onPressDone={this.togglePopupPriority} isVisible={isPopupPriority} />
				<PopupAssigned ref={this.Assign} onPressDone={this.togglePopupAssign} isVisible={isPopupAssign} />
				<PopupAttachment
					ref={this.Attachment}
					onPressDone={this.togglePopupAttachment}
					isVisible={isPopupAttachment}
				/>
				<PopupEstimate ref={this.Estimate} onPressDone={this.togglePopupEstimate} isVisible={isPopupEstimate} />
				<PopupDueDate ref={this.DueDate} onPressDone={this.togglePopupDueDate} isVisible={isPopupDueDate} />
			</Container>
		);
	}
}

const Container = styled.View`
	padding: 15px;
	position: relative;
	flex: 1;
`;

const Description = styled.Text`
	color: ${GlobalStyle.GREY};
	fontSize: ${scaleWidth(4)};
	marginTop: ${scaleHeight(4)};
	marginBottom: ${scaleHeight(4)};
`;
