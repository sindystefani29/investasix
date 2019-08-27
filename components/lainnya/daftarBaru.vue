<template>
    <div class="plr-15">
        <div 
            class="mulai-investasi"
            :class="{
                'pb-189': inputEmail.isInputEmailAction || fullName.isFullNameAction,
                'pb-129': chooseUser.isChooseUserAction || accountType.isAccountTypeAction,
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
                <p>Silahkan buat kata sandi untuk melindungi akun Anda dengan catatan harus terdiri minimal 8 huruf, minimal 1 huruf kapital, minimal 1 simbol</p>
            </div>
        </div>
        <div class="mulai-investasi--user" v-if="passwordValidation.isPassword">
            <div class="mulai-investasi--user-chat bg--yellow mb-3">
                <p>{{password}}</p>
            </div>
        </div>
        <div class="mulai-investasi--admin" v-if="passwordValidation.isPassword">
            <div class="mulai-investasi--admin-chat bg--white mb-3">
                <p>Masukkan Nomor HP yang kamu pakai</p>
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
        </div>
    </div>
</template>

<script>
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
        }
    }
}
</script>