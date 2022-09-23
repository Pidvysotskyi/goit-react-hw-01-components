import PropTypes from 'prop-types';
import {
  StatConteiner,
  StatTitle,
  StatList,
  StatListItem,
  ItemLabel,
  ItemQuantity,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatConteiner>
      {title !== undefined && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.flatMap(({ id, label, percentage }) => {
          return (
            <StatListItem id={id} key={id}>
              <ItemLabel>{label}</ItemLabel>
              <ItemQuantity>{percentage}%</ItemQuantity>
            </StatListItem>
          );
        })}
      </StatList>
    </StatConteiner>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object.isRequired),
  title: PropTypes.string,
};
