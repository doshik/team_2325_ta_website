import { connect } from 'react-redux';
import StudentDashboardView from './StudentDashboardView';
import ProfessorDashboardView from './ProfessorDashboardView';

// Example of a connected component
const DashboardView = ({ auth }) => {
  return (
    <>
      {auth.user.accountType === 'student' && <StudentDashboardView />}
      {auth.user.accountType === 'professor' && <ProfessorDashboardView />}
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth // Assuming user information is stored in the Redux store
});

export default connect(mapStateToProps)(DashboardView);