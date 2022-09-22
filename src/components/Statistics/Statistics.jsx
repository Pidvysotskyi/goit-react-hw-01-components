import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section>
      <h2>{title}</h2>

      <ul>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object.isRequired),
  title: PropTypes.string.isRequired,
};
