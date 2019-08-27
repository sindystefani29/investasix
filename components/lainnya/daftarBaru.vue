<template>
    <div class="plr-15">
        <div 
            class="mulai-investasi"
            :class="{
                'pb-129': chooseUser.isChooseUserAction || accountType.isAccountTypeAction || kodeOTPValidation.iskodeOTPAction,
                'pb-189': inputEmail.isInputEmailAction || fullName.isFullNameAction,
                'pb-208': nomorHPValidation.isNomorHPAction,
                'pb-269': passwordValidation.isPasswordAction
            }"
        >
            <div class="mulai-investasi--admin">
                <div class="mulai-investasi--admin-chat bg--white mb-3">
                    <p>Halo sahabat Investasix</p>
                </div>
                <div class="mulai-investasi--admin-chat bg--white mb-3">
                    <p>Silahkan pilih metode pendaftaran akun anda</p>
                </div>
                <div class="mulai-investasi--admin-chat bg--white mb-3">
                    <p>Anda ingin mendaftar sebagai apa di Investasix?</p>
                </div>
            </div>
            <div class="mulai-investasi--user" v-if="chooseUser.isInvestor">
                <div class="mulai-investasi--user-chat bg--yellow mb-3">
                    <p>Investor</p>
                </div>
            </div>
            <div class="mulai-investasi--user" v-if="chooseUser.isBorrower">
                <div class="mulai-investasi--user-chat bg--yellow mb-3">
                    <p>Borrower</p>
                </div>
            </div>
            <div class="mulai-investasi--admin" v-if="chooseUser.isBorrower || chooseUser.isInvestor ">
                <div class="mulai-investasi--admin-chat bg--white mb-3">
                    <p>Mohon pilih tipe penggunaan akun Anda</p>
                </div>
            </div>
            <div class="mulai-investasi--user" v-if="accountType.isPersonal">
                <div class="mulai-investasi--user-chat bg--yellow mb-3">
                    <p>Perseorangan</p>
                </div>
            </div>
            <div class="mulai-investasi--user" v-if="accountType.isCorporate">
                <div class="mulai-investasi--user-chat bg--yellow mb-3">
                    <p>Perusahaan</p>
                </div>
            </div>
            <div class="mulai-investasi--admin" v-if="accountType.isPersonal || accountType.isCorporate">
                <div class="mulai-investasi--admin-chat bg--white mb-3">
                    <p>Silahkan masukkan alamat Email Anda di bawah ini</p>
                </div>
            </div>
            <div class="mulai-investasi--user" v-if="inputEmail.isInputEmail">
                <div class="mulai-investasi--user-chat bg--yellow mb-3">
                    <p>{{email}}</p>
                </div>
            </div>
            <div class="mulai-investasi--admin" v-if="inputEmail.isInputEmail">
                <div class="mulai-investasi--admin-chat bg--white mb-3">
                    <p>Boleh beritahu kami nama Anda?</p>
                </div>
            </div>
            <div class="mulai-investasi--user" v-if="fullName.isFullName">
                <div class="mulai-investasi--user-chat bg--yellow mb-3">
                    <p>{{fullname}}</p>
                </div>
            </div>
            <div class="mulai-investasi--admin" v-if="fullName.isFullName">
                <div class="mulai-investasi--admin-chat bg--white mb-3">
                    <p>Silahkan buat kata sandi untuk melindungi akun Anda dengan catatan harus terdiri minimal 8 huruf</p>
                </div>
            </div>
            <div class="mulai-investasi--user" v-if="passwordValidation.isPassword">
                <div class="mulai-investasi--user-chat bg--yellow mb-3">
                    <p>{{password.replace(/./g, '*')}}</p>
                </div>
            </div>
            <div class="mulai-investasi--admin" v-if="passwordValidation.isPassword">
                <div class="mulai-investasi--admin-chat bg--white mb-3">
                    <p>Masukkan Nomor HP yang kamu pakai</p>
                </div>
            </div>
            <div class="mulai-investasi--user" v-if="nomorHPValidation.isNomorHP">
                <div class="mulai-investasi--user-chat bg--yellow mb-3">
                    <p>{{nomorHP}}</p>
                </div>
            </div>
            <div class="mulai-investasi--admin" v-if="nomorHPValidation.isNomorHP">
                <div class="mulai-investasi--admin-chat bg--white mb-3">
                    <p>Kami telah mengirim kode otp melalui SMS ke handphone Anda. Silahkan masukan kode OTP</p>
                </div>
            </div>
            <div class="mulai-investasi--user" v-if="kodeOTPValidation.iskodeOTP">
                <div class="mulai-investasi--user-chat bg--yellow mb-3">
                    <p>{{kodeOTP}}</p>
                </div>
            </div>
            <div class="mulai-investasi--admin" v-if="kodeOTPValidation.iskodeOTP">
                <div class="mulai-investasi--admin-chat bg--white mb-3">
                    <p>Verifikasi Akun kamu telah berhasil !</p>
                </div>
            </div>
            <!--sticky dialog-->
            <div class="mulai-investasi--floating d-flex main h-129" v-if="chooseUser.isChooseUserAction">
                <h4>Anda mendaftar sebagai ...</h4>
                <div class="d-flex">
                    <v-btn color="#A71E22" class="flex-1" @click="chooseUser.isBorrower = !chooseUser.isBorrower, chooseUserMethod()">
                        <a>Borrower (Peminjam)</a>
                    </v-btn>
                    <v-btn color="#A71E22" class="flex-1" @click="chooseUser.isInvestor = !chooseUser.isInvestor, chooseUserMethod()">
                        <a>Investor (Pemodal)</a>
                    </v-btn>
                </div>
            </div>
            <div class="mulai-investasi--floating d-flex main h-129" v-if="accountType.isAccountTypeAction">
                <h4>Pilih tipe penggunaan akun Anda</h4>
                <div class="d-flex">
                    <v-btn color="#A71E22" class="flex-1" @click="accountType.isPersonal = !accountType.isPersonal, accountTypeMethod()">
                        <a>Perseorangan</a>
                    </v-btn>
                    <v-btn color="#A71E22" class="flex-1" @click="accountType.isCorporate = !accountType.isCorporate, accountTypeMethod()">
                        <a>Perusahaan</a>
                    </v-btn>
                </div>
            </div>
            <div class="mulai-investasi--floating d-flex main h-189" v-if="inputEmail.isInputEmailAction">
                <h4>Alamat Email</h4>
                <div class="d-flex">
                    <v-text-field
                        type="text"
                        label="Alamat Email"
                        v-model="email"
                        :rules="emailRules"
                    ></v-text-field>
                </div>
                <v-btn color="#A71E22" class="ma-0 d-flex" @click="inputEmail.isInputEmail = !inputEmail.isInputEmail, inputEmailMethod()">
                    <a>Kirim</a>
                </v-btn>
            </div>
            <div class="mulai-investasi--floating d-flex main h-189" v-if="fullName.isFullNameAction">
                <h4>Nama Lengkap</h4>
                <div class="d-flex">
                    <v-text-field
                        type="text"
                        label="Nama Lengkap sesuai dengan KTP"
                        v-model="fullname"
                    ></v-text-field>
                </div>
                <v-btn color="#A71E22" class="ma-0 d-flex" @click="fullName.isFullName = !fullName.isFullName, fullNameMethod()">
                    <a>Kirim</a>
                </v-btn>
            </div>
            <div class="mulai-investasi--floating d-flex main h-269" v-if="passwordValidation.isPasswordAction">
                <h4>Password</h4>
                <div class="d-flex">
                    <v-text-field
                        v-model="password"
                        :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                        :rules="passwordRules"
                        :type="showPassword ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password"
                        counter
                        @click:append="showPassword = !showPassword"
                    ></v-text-field>
                </div>
                <div class="d-flex">
                    <v-text-field
                        v-model="repeatPassword"
                        :append-icon="showRepeatPassword ? 'visibility_off' : 'visibility'"
                        :rules="repeatPasswordRules"
                        :type="showRepeatPassword ? 'text' : 'password'"
                        name="input-10-1"
                        label="Ulangi Password"
                        counter
                        @click:append="showRepeatPassword = !showRepeatPassword"
                    ></v-text-field>
                </div>
                <v-btn color="#A71E22" class="ma-0 d-flex" @click="passwordValidation.isPassword = !passwordValidation.isPassword, passwordMethod()">
                    <a>Kirim</a>
                </v-btn>
            </div>
            <div class="mulai-investasi--floating d-flex main h-208" v-if="nomorHPValidation.isNomorHPAction">
                <h4>Nomor HP</h4>
                <div class="d-flex">
                    <v-text-field
                        type="text"
                        label="Nomor HP"
                        hint="Pastikan nomor hp kamu benar karena akan dikirimkan kode OTP untuk proses verifikasi email"
                        v-model="nomorHP"
                    ></v-text-field>
                </div>
                <v-btn color="#A71E22" class="ma-0 d-flex" @click="nomorHPValidation.isNomorHP = !nomorHPValidation.isNomorHP, nomorHPMethod()">
                    <a>Dapatkan Kode OTP</a>
                </v-btn>
            </div>
            <div class="mulai-investasi--floating d-flex main h-129" v-if="kodeOTPValidation.iskodeOTPAction">
                <h4>Kode OTP</h4>
                <div class="d-flex">
                    <div class="px-1 kodeOTP" v-for="i in 6" :key="i">
                        <v-text-field
                            type="number"
                            :name="`value${i}`"
                            :autofocus=" i == 0 ? 'true' : false "
                            @:keyup="moveCursor($event, i)"
                            @keypress="isNumeric($event)"
                            @input="maxLengthCheck($event)"
                            maxlength = "1"
                            min = "1"
                            max = "1"
                        ></v-text-field>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    data () {
      return {
        chooseUser: {
            isBorrower: false,
            isInvestor: false,
            isChooseUserAction: true
        },
        accountType: {
            isPersonal: false,
            isCorporate: false,
            isAccountTypeAction: false
        },
        email: '',
        emailRules: [
            v => !!v || 'Mohon isi email',
            v => /.+@.+/.test(v) || 'Format alamat email tidak valid',
        ],
        inputEmail: {
            isInputEmail: false,
            isInputEmailAction: false
        },
        fullname: '',
        fullName: {
            isFullName: false,
            isFullNameAction: false
        },
        password: '',
        repeatPassword: '',
        showPassword: false,
        passwordRules:[
            v => !!v || 'Mohon isi password',
            v => v.length >= 8 || 'Password kurang dari 8 karakter',
        ],
        showRepeatPassword: false,
        repeatPasswordRules:[
            v => !!v || 'Mohon isi password',
            v => this.password == this.repeatPassword || 'Password tidak cocok',
        ],
        passwordValidation:{
            isPassword: false,
            isPasswordAction: false
        },
        nomorHP: '+62',
        nomorHPValidation:{
            isNomorHP: false,
            isNomorHPAction: false
        },
        kodeOTPValidation:{
            iskodeOTP: false,
            iskodeOTPAction: false
        }
      }
    },
    mounted(){
        setTimeout(this.toBottom, 100)
    },
    methods:{
        toBottom(){
            window.scrollTo(0, document.body.scrollHeight)
        },
        chooseUserMethod(){
            this.chooseUser.isChooseUserAction = false
            this.accountType.isAccountTypeAction = true
            setTimeout(this.toBottom, 100)
        },
        accountTypeMethod(){
            this.accountType.isAccountTypeAction = false
            this.inputEmail.isInputEmailAction = true
            setTimeout(this.toBottom, 100)
        },
        inputEmailMethod(){
            this.inputEmail.isInputEmailAction = false
            this.fullName.isFullNameAction = true
            setTimeout(this.toBottom, 100)
        },
        fullNameMethod(){
            this.fullName.isFullNameAction = false
            this.passwordValidation.isPasswordAction = true
            setTimeout(this.toBottom, 100)
        },
        passwordMethod(){
            this.passwordValidation.isPasswordAction = false
            this.nomorHPValidation.isNomorHPAction = true
            setTimeout(this.toBottom, 100)
        },
        nomorHPMethod(){
            this.nomorHPValidation.isNomorHPAction = false
            this.kodeOTPValidation.iskodeOTPAction = true
            setTimeout(this.toBottom, 100)
        },
        moveCursor(e, index){
            if(e.target.value.length > 0){
                if(index !== 6){
                    document.getElementsByClassName('kodeOTP')[index].children[0].children[0].children[0].children[0].children[0].focus()
                }
                e.target.value.slice(0,1)
            }
        },
        isNumeric (evt) {
            let theEvent = evt || window.event;
            let key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode (key);
            let regex = /[0-9]|\./;
            if ( !regex.test(key) ) {
                theEvent.returnValue = false;
                if(theEvent.preventDefault) theEvent.preventDefault();
            }
        },
        maxLengthCheck(object) {
            if (object.value.length > 1)
            object.value = object.value.slice(0, 1)
        }
    }
}
</script>