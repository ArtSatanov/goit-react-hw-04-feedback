import { ListItem, Btn } from './FeedbackOption.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {Object.keys(options).map(name => (
        <ListItem key={name}>
          <Btn
            onClick={() => {
              onLeaveFeedback(name);
            }}
          >
            {name}
          </Btn>
        </ListItem>
      ))}
    </ul>
  );
};
