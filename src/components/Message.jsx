function Message(props) {
  const { children } = props;
  console.log(props);

  return <div>{children}</div>;
}

export default Message;
