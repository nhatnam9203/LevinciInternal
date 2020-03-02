import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import { ScrollView, View } from 'react-native';
import {
	Select,
	Description,
	PopupPriority,
	PopupAssigned,
	PopupAttachment,
	PopupEstimate,
	TaskTitle,
	Item
} from './component';
import images from '@assets/images';

export default class Body extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			isPopupPriority: false,
			isPopupAssign: false,
			isPopupAttachment: false,
			isPopupEstimate: false
		};
		this.Priority = React.createRef();
		this.Assign = React.createRef();
		this.Attachment = React.createRef();
		this.Estimate = React.createRef();
	}

	openModalPriority = () => {
		this.setState({ isPopupPriority: true });
	};

	closeModalPriority = () => {
		this.setState({ isPopupPriority: false });
		const priority = this.Priority.current.state.priority;
	};

	openModalAssign = () => {
		this.setState({ isPopupAssign: true });
	};

	closeModalAssign = () => {
		this.setState({ isPopupAssign: false });
		const assignee = this.Priority.current.state.assignee;
	};

	openModalAttachment = () => {
		this.setState({ isPopupAttachment: true });
	};

	closeModalAttachment = () => {
		this.setState({ isPopupAttachment: false });
	};

	openModalEstimate = () => {
		this.setState({ isPopupEstimate: true });
	};

	closeModalEstimate = () => {
		this.setState({ isPopupEstimate: false });
	};

	render() {
		const { isPopupPriority, isPopupAssign, isPopupAttachment, isPopupEstimate } = this.state;
		return (
			<Container>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Select name="Project" title="Select Project" />
					<Select name="State" title="Select State" />
					<Select name="Status" title="Select Status" />

					<TaskTitle />
					<Description />

					<Item content="Priority" onPress={this.openModalPriority} icon={images.Priority} />
					<Item content="Due date..." icon={images.DueDate} />
					<Item content="Estimate" onPress={this.openModalEstimate} icon={images.Estimate} />
					<Item content="Unassigned" onPress={this.openModalAssign} icon={images.UnAssigned} />
					<Item content="Attachment" onPress={this.openModalAttachment} icon={images.Attachment} />
					<View style={{ height: scaleHeight(20) }} />
				</ScrollView>

				<PopupPriority ref={this.Priority} onPressDone={this.closeModalPriority} isVisible={isPopupPriority} />
				<PopupAssigned ref={this.Assign} onPressDone={this.closeModalAssign} isVisible={isPopupAssign} />
				<PopupAttachment
					ref={this.Attachment}
					onPressDone={this.closeModalAttachment}
					isVisible={isPopupAttachment}
				/>
				<PopupEstimate ref={this.Estimate} onPressDone={this.closeModalEstimate} isVisible={isPopupEstimate} />
			</Container>
		);
	}
}

const Container = styled.View`
	flex: 1;
	padding: 15px;
`;
