const TabContent = ({ active, children }) => {
  return <div className='card-tabs__content'>{active && children}</div>;
};

export default TabContent;
