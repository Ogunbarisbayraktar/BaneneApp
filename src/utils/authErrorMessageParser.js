export default function(errorCode) {
    switch(errorCode) {
        case 'auth/invalid-email':
            return 'Geçersiz e-mail'
        case ' auth/user-not-found':
            return 'Kullanıcı bulunamadı'

    default:
        return errorCode;
    }
}