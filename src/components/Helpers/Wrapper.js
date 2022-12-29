/* 
    This Wrapper custom component acts as a replacement for wrapper divs in many components and sub components to ensure not cluttering the DOM with many nested divs,
    and can be reused througout the other components as custom wrapper
*/

const Wrapper = (props) => {
  // props.children is React's syntax for various children elements nested within a custom component
  return props.children;
};

export default Wrapper;
