import BasicListScreen from "./BasicListScreen";
import ContactsListScreen from "./ContactsListScreen";
import ConversationListScreen from "./ConversationListScreen";
import GridListScreen from './GridListScreen';

export const listNavigator = {
  "unicorn.lists.BasicListScreen": {
    screen: BasicListScreen,
  },
  "unicorn.lists.ContactsListScreen": {
    screen: ContactsListScreen,
  },
  "unicorn.lists.ConversationListScreen": {
    screen: ConversationListScreen,
  },
  'unicorn.lists.GridListScreen': {
    screen: GridListScreen,
  },
};
