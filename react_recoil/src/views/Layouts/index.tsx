import { Link, Outlet } from "react-router-dom";
import Container from '@com/Container';
export function DefaultLayout() {
  return (
    <>
      <Container>
        <div className="iconfont icon-152error40401">dsafasdfa</div>
      </Container>
      {/*<nav style={{ display: "flex", gap: "8px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/demo">Demo</Link>
        <Link to="/ctx">ctx</Link>
        <Link to="/epctx">epctx</Link>
        <Link to="/dashboard">dashboard</Link>
        <Link to="/404">404</Link>
      </nav>
      <main>
        <Outlet />
      </main>*/}
    </>
  );
}
