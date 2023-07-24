import PropTypes from "prop-types";
export default function Total({ total }) {
  return (
    <div className="m-4 mx-auto max-w-sm overflow-hidden rounded bg-slate-300 shadow-2xl">
      <h2>Total: {total}</h2>
    </div>
  );
}
Total.propTypes = {
  total: PropTypes.number,
  onClick: PropTypes.any,
};
