import React from 'react';

const Notifications = () => {
  return (
    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0">
      <div className="dropdown-menu-header">4 New Notifications</div>
      <div className="list-group">
        <a href="#" className="list-group-item">
          <div className="row g-0 align-items-center">
            <div className="col-2">
              <i className="text-danger" data-feather="alert-circle"></i>
            </div>
            <div className="col-10">
              <div className="text-dark">Update completed</div>
              <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
              <div className="text-muted small mt-1">30m ago</div>
            </div>
          </div>
        </a>
        {/* Add more notifications here */}
      </div>
      <div className="dropdown-menu-footer">
        <a href="#" className="text-muted">Show all notifications</a>
      </div>
    </div>
  );
};

export default Notifications;
