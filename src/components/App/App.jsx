import { Profile } from '../Profile/Profile';
import user from '../../user.json';
import { Container } from './App.styled';
import { Statistics } from 'components/Statistics/Statistics';
import data from '../../data.json';
import friends from '../../friends.json';
import { FriendList } from 'components/FriendList/FriendList';
import transactions from '../../transactions.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
