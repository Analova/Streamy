import React from "react";
import Modal from "../Modal";
import history from "../../histroy";

const StreamDelete = () => {
  const actions = (
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  );
  return (
    <div>
      StremeDelete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream"
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

export default StreamDelete;
