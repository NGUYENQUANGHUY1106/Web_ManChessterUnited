<?php
    session_start();
    include "../database/connect.php";
    global $conn;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">

    <link rel="stylesheet" href="/assets/login/styleslogin.css">

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>

    <title>Animated login form - Bedimcode</title>
</head>
<body>
    <div class="login">
        <img src="/assets/login/img/anh-nen-manchester-united-dang-tap-luyen.webp" alt="login image" class="login__img">

        <!-- Login Form -->
        <form action="" method="POST" class="login__form" id="login-form">
            <h1 class="login__title">Login</h1>

            <div class="login__content">
                <div class="login__box">
                    <i class="ri-user-3-line login__icon"></i>
                    <div class="login__box-input">
                        <input type="email" required class="login__input" id="login-email" name="email" placeholder=" " value=<?= $_POST['email'] ?? "";?>>
                        <label for="login-email" class="login__label">Email</label>
                    </div>
                </div>
                <div class="login__box">
                    <i class="ri-lock-2-line login__icon"></i>
                    <div class="login__box-input">
                        <input type="password" required class="login__input" id="login-pass" name="password" placeholder=" " value="<?= $_POST['password'] ?? "";?>">
                        <label for="login-pass" class="login__label">Password</label>
                        <i class="ri-eye-off-line login__eye" id="login-eye"></i>
                    </div>
                </div>
            </div>  

            <div class="login__check">
                <div class="login__check-group">
                    <input type="checkbox" class="login__check-input" id="login-check">
                    <label for="login-check" class="login__check-label">Remember me</label>
                </div>
                <a href="#" class="login__forgot">Forgot Password?</a>
            </div>

            <button type="submit" class="login__button" name="login">Login</button>

            <p class="login__register">
                Don't have an account? <a href="#" id="register-link">Register</a>
            </p>
            <!-- kết nối -->
         <?php
            if ($_POST && isset($_POST['login'])) {
                $email = $_POST['email'];
                $password = $_POST['password'];
                $result = mysqli_query($conn, "SELECT * FROM user WHERE email = '$email' AND password = '$password'");
                $row = mysqli_fetch_assoc($result);

                if ($row) {
                    // Chỉnh đường dẫn tới file index.html
                    header("Location: /assets/html/index.html");
                    exit();
                } else {
                    echo '<p style="color:red">Tên đăng nhập hoặc mật khẩu không đúng!<p>';
                }
            }
        ?>
        </form>

        <!-- Register Form -->
        <form action="" method="POST" class="login__form" id="register-form" style="display: none;">
            <h1 class="login__title">Register</h1>

            <div class="login__content">
                <div class="login__box">
                    <i class="ri-user-3-line login__icon"></i>
                    <div class="login__box-input">
                        <input type="text" required class="login__input" id="register-name" name="name" placeholder=" ">
                        <label for="register-name" class="login__label">Name</label>
                    </div>
                </div>
                <div class="login__box">
                    <i class="ri-mail-line login__icon"></i>
                    <div class="login__box-input">
                        <input type="email" required class="login__input" id="register-email" name="email" placeholder=" ">
                        <label for="register-email" class="login__label">Email</label>
                    </div>
                </div>
                <div class="login__box">
                    <i class="ri-phone-line login__icon"></i>
                    <div class="login__box-input">
                        <input type="text" required class="login__input" id="register-phone" name="phone" placeholder=" ">
                        <label for="register-phone" class="login__label">Phone Number</label>
                    </div>
                </div>
                <div class="login__box">
                    <i class="ri-lock-2-line login__icon"></i>
                    <div class="login__box-input">
                        <input type="password" required class="login__input" id="register-pass" name="password" placeholder=" ">
                        <label for="register-pass" class="login__label">Password</label>
                        <i class="ri-eye-off-line login__eye" id="register-eye"></i>
                    </div>
                </div>
            </div>

            <button type="submit" class="login__button" name="register">Register</button>

            <p class="login__register">
                Already have an account? <a href="#" id="login-link">Login</a>
            </p>
            <?php
                if ($_POST && isset($_POST['register'])) {
                    $name = $_POST['name'];
                    $email = $_POST['email'];
                    $phone = $_POST['phone'];
                    $password = $_POST['password'];

                    // Kiểm tra xem email đã tồn tại chưa
                    $result = mysqli_query($conn, "SELECT * FROM user WHERE email = '$email'");
                    if (mysqli_num_rows($result) > 0) {
                        echo '<p style="color:red">Email đã được sử dụng!<p>';
                    } else {
                        // Thêm tài khoản mới vào cơ sở dữ liệu
                        $sql = "INSERT INTO user (name, email, phonenumber, password) VALUES ('$name', '$email', '$phone', '$password')";
                        if (mysqli_query($conn, $sql)) {
                            echo '<script>
                                    Swal.fire({
                                        title: "Đăng ký thành công!",
                                        text: "Bạn có thể đăng nhập ngay bây giờ.",
                                        icon: "success"
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            window.location.href = "/assets/html/index.html"; // Thay đổi thành đường dẫn trang login của bạn
                                        }
                                    });
                                </script>';
                        } else {
                            echo '<p style="color:red">Có lỗi xảy ra, vui lòng thử lại!<p>';
                        }
                    }
                }
            ?>
        </form>
    </div>

    <script src="/assets/login/main.js"></script>
</body>
</html>
