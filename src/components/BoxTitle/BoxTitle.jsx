import PropTypes from 'prop-types';
import css from './BoxTitle.module.css';


const BoxTitle = ({ title }) => {
  return <h1 className={css.title}> {title}</h1>;
};
 BoxTitle.propTypes = {
  title: PropTypes.string,
};
export default  BoxTitle;