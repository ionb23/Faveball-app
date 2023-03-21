import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';


function Footer() {
    return (
        <footer class="py-3 mt-4">
            <ul class="nav justify-content-center border-bottom pb-3">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Summary</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Saved Teams</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
            </ul>
            <p class="text-center text-muted">© 2023 FaveBall, Inc</p>
        </footer>
    )
}

export default Footer