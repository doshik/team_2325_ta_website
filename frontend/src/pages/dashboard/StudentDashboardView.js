import * as React from "react";
import StudentDashboard from "./StudentDashboard";

const StudentDashboardView = () => {
    return (
      <div style={styles.container}>
        <h1>
            Student Dashboard
        </h1>
        <StudentDashboard/>
      </div>
    );
  };

export default StudentDashboardView;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100vh",
    marginTop: "15px"
  },
  };