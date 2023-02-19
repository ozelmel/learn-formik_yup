import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .max(20, "must be 20 or less characters")
    .required("lutfen isim kısmını boş bırakmayınız"),
  email: Yup.string()
    .email("lutfen geçerli email adresi giriniz")
    .required("lutfen email kısmını boş bırakmayınız"),
  password: Yup.string()
    .min(8, "Sifre en az 8 karakter içermelidir")
    .max(16, "Sifre en fazla 16 karakter içermelidir.")
    .required("lütfen sifre kısmını boş bırakmayınız")
    .matches(/\d+/, "sifre rakam içermelidir")
    .matches(/[A-Z]+/, "sifre buyuk harf içermelidir")
    .matches(/[a-z]+/, "sifre kucuk harf içermelidir")
    .matches(/[!,?{}<>&%*½$#£;.]+/, "sifreniz özel karakter içermelidir"),
});
