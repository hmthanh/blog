---
layout: post
title:  "VIM cơ bản"
date:   2020-11-01 11:04:17 +0700
author: Minh-Thanh Hoang
categories: tutorial
---

Download VIM tại : [VIM](https://www.vim.org/download.php)

1. Vim có hai chế độ

    * `insert` mode (để chèn) : ấn `i` để chuyển qua chế độ insert
    * `normal` mode  (để di chuyển và điều khiển trong văn bản) : ấn `Esc` để chuyển qua chế độ normal

2. Vim chuyển cơ bản

    * Di chuyển sang trái <- hoặc sang phải -> trong văn bản : ấn `h` sang trái, ấn `l` sang phải
    * Di chuyển lên xuống từng dòng : ấn `j` đi xuống, ấn `k` đi lên

3. Di chuyển theo từ

    * Để di chuyển đến từ tiếp theo : `w` đến đầu từ, `e` đến cuối từ
    * Để di chuyển đến từ phía trước : `b` di chuyển đến đầu từ

4. Di chuyển sử dụng số

    * Sử dụng số trước các phím di chuyển (`w`, `e`, `b`) để đi đến số từ mong muốn
    
    Ví dụ : `3w` để di chuyển đến vị trí đầu tiên sau 3 từ tiếp theo

    * Sử dụng số trước `l` để di chuyển đến ký tự (letter) lần
    
    Ví dụ : `3l` di chuyển đến 3 ký tự tiếp theo

5. Chèn nhiều lần trong chế độ `norrmal` mode

    * Để chèn các kỹ tự lặp lại nhiều lần, ta sử dụng `[number]i[character]` rồi `Esc`

    Ví dụ `30iabc` `Esc` sẽ sinh ra `abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcab`

6. Tìm kiếm một ký tự

    * Để tìm kiếm một ký tự : `f[character]`
    * Để tìm kiếm nhiều ký tự : `[number]f[character]`

7. Đi đến vị trí cặp dấu ngoặc (`[`, `{`, `(`) trùng : `Shift + 5 = %`

8. Di chuyển đến

    * Đầu dòng `0`
    * Cuối dòng `Shift + 4 = $`

9. Di chuyển đến từ giống với từ ở ngay vị trí con trỏ

    * Tiếp theo `*`
    * Quay lại `#`

10. Di chuyển đến

    * Đầu văn bản `gg`
    * Cuối văn bản `G`
    * Đến dòng thứ number : `[number]G`

11. Tìm kiếm một từ

    * Nhấn `/[word]` để tìm kiếm
    * Nhấn `Enter` `n` để di chuyển đến từ tiếp theo

12. Để chèn một dòng mới

    * Trước dòng hoặc sau dòng hiện tại `o` hoặc `O`

13. Để xóa một ký tự

    * `x` xóa các ký tự trước
    * `X` xóa ký tự phía sau

14. Thay thế ký tự ở vị trí con trỏ : `r[character]`

15. Để xóa một chữ

    * `d[number]w` xóa number chữ và khoảng trắng
    * `d[number]e` xóa number chữ

16. Để lặp lại quá trình đã xóa ở trên nhấn `.`

17. Chế độ visual mode :

    * `v` visual mode : Chọn theo cột
    * `V` visual mode line : Chọn theo hàng

    Ví du để chọn một từ sau con trỏ đang xét nhấn `vw`

18. Các câu lệnh thường gặp

    * :w Lưu văn bản
    * :wq Lưu và thoát văn bản
    * :q
