import styles from './chatter.module.css';
import ChatList from "../../components/chatList";
import ChatWindow from "../../components/chatWindow";
import {withSocket} from "../../api/socket";

const Chatter = () => {

	return (
		<div className={styles.root}>
				<div className={styles.grid}>
					<div className={styles.sideNav}>
						<ChatList/>
					</div>
					<div className={styles.chat}>
						<ChatWindow/>
					</div>
				</div>
		</div>
	)
};
export default withSocket(Chatter);
