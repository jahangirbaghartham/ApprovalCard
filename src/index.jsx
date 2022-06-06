import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import ComponentDo from "./ComponentDo";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
    <h4>warning!</h4> 
    This is the <b> sementic ui cdn use</b>
    </ApprovalCard>
      <ApprovalCard>
        <ComponentDo
          author="sam"
          date="Time 08 : 00pm"
          text="we scuccess"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDo
          author="john"
          date="Time 03 : 30"
          text="I can do it"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDo
          author="doei"
          date="Time 12 : 45"
          text="so simple"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
