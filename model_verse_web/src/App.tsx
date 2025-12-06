import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
export default function App() {
    return (
        <div className="bg-light min-vh-100">
            <Header />

            <div className="container-xxl" style={{ marginTop: "90px", maxWidth: "1400px" }}>
                <Hero />
                <Cards />
                <TableSection />
            </div>

            <MobileNav />
        </div>
    );
}

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#">MyApp</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function Hero() {
    return (
        <div className="row align-items-center py-4">
            <div className="col-md-7">
                <h1 className="fw-bold">Responsive React + Bootstrap</h1>
                <p className="text-muted">
                    Giao diện tự co giãn đẹp cho cả Web và Mobile.
                </p>
                <button className="btn btn-primary">Get Started</button>
            </div>
            <div className="col-md-5 text-center">
                <img
                    src="https://via.placeholder.com/400x250"
                    className="img-fluid rounded shadow"
                    alt="hero"
                />
            </div>
        </div>
    );
}

function Cards() {
    return (
        <div className="row g-3 mt-2">
            {[
                { title: "Analytics", desc: "Thống kê tổng quan nhanh." },
                { title: "Users", desc: "Quản lý người dùng hiệu quả." },
                { title: "Settings", desc: "Tùy chỉnh theo nhu cầu." },
            ].map((item, i) => (
                <div key={i} className="col-12 col-sm-6 col-lg-4">
                    <div className="card shadow-sm p-3">
                        <h5 className="fw-bold">{item.title}</h5>
                        <p className="text-muted">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function TableSection() {
    return (
        <div className="card mt-4 shadow-sm">
            <div className="card-body">
                <h5 className="card-title fw-bold">Danh sách gần đây</h5>

                <div className="table-responsive">
                    <table className="table align-middle">
                        <thead>
                        <tr>
                            <th>Tên</th>
                            <th>Trạng thái</th>
                            <th>Ngày</th>
                        </tr>
                        </thead>
                        <tbody>
                        {[1, 2, 3].map((i) => (
                            <tr key={i}>
                                <td>Item {i}</td>
                                <td>Hoạt động</td>
                                <td>2025-12-0{i}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function MobileNav() {
    return (
        <nav className="d-lg-none bg-white shadow-lg border-top fixed-bottom py-2">
            <div className="container d-flex justify-content-around">
                <button className="btn btn-link text-dark">Home</button>
                <button className="btn btn-link text-dark">Search</button>
                <button className="btn btn-primary rounded-pill px-4">Add</button>
                <button className="btn btn-link text-dark">Alerts</button>
                <button className="btn btn-link text-dark">Account</button>
            </div>
        </nav>
    );
}
