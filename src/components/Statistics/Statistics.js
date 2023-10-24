import { StatList, Text } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <StatList>
        <Text>Good: {good}</Text>
      </StatList>
      <liStatList>
        <Text>Neutral: {neutral}</Text>
      </liStatList>
      <StatList>
        <Text>Bad: {bad}</Text>
      </StatList>
      <StatList>
        <Text>Total: {total}</Text>
      </StatList>
      <StatList>
        <Text>Positive feedback: {positivePercentage}%</Text>
      </StatList>
    </ul>
  );
};
