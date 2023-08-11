import { Link } from 'react-router-dom';

const ForgotPasswordLink = () => {
  return (
    <div className="mt-6 text-center">
      <p>
        <Link to="/auth/signup" className="text-primary">
          Forgot your password?
        </Link>
      </p>
    </div>
  );
};

export default ForgotPasswordLink;