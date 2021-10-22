import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

function Detail({ toDo }) {
  /* useParams를 이용할수도있지만 mapStateToProps의 props를 이용할 수 있다.
  const id = useParams(); */

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
