package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

func main() {
	Routers()
}

func Routers() {
	InitDB()
	defer db.Close()
	log.Println("Starting the HTTP server on port 9080")
	router := mux.NewRouter()
	router.HandleFunc("/login", Login).Methods("POST")
	router.HandleFunc("/lupasandi", LupaSandi).Methods("POST")
	router.HandleFunc("/register", Register).Methods("POST")
	router.HandleFunc("/profile/{id}", GetUsers).Methods("GET")
	router.HandleFunc("/editprofile/{id}", UpdateProfile).Methods("PUT")
	router.HandleFunc("/ubahsandi/{id}", UbahSandi).Methods("PUT")
	http.ListenAndServe(":9080", &CORSRouterDecorator{router})
}

/***************************************************/
// Ubah Sandi
func UbahSandi(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	params := mux.Vars(r)
	stmt, err := db.Prepare("UPDATE user SET password = ? WHERE id = ?")
	if err != nil {
		panic(err.Error())
	}
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err.Error())
	}
	keyVal := make(map[string]string)
	json.Unmarshal(body, &keyVal)
	password := keyVal["password"]
	_, err = stmt.Exec(password, params["id"])
	if err != nil {
		panic(err.Error())
	}
	fmt.Fprintf(w, "Quest with ID = %s was updated",
		params["id"])
}

// Lupa Sandi
func LupaSandi(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err.Error())
	}
	keyVal := make(map[string]string)
	json.Unmarshal(body, &keyVal)
	email := keyVal["email"]
	result, err := db.Query("SELECT id, nama, username, email, password FROM user WHERE email = ?", email)
	if err != nil {
		panic(err.Error())
	}
	defer result.Close()
	var user User
	for result.Next() {
		err := result.Scan(&user.ID, &user.Nama, &user.Username, &user.Email, &user.Password)
		if err != nil {
			panic(err.Error())
		}
	}
	json.NewEncoder(w).Encode(user)
}

// Edit User by ID
func UpdateProfile(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	params := mux.Vars(r)
	stmt, err := db.Prepare("UPDATE user SET nama = ?, username = ?, tanggal_lahir = ?, nomor_telepon = ?, email = ?, password = ? WHERE id = ?")
	if err != nil {
		panic(err.Error())
	}
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err.Error())
	}
	keyVal := make(map[string]string)
	json.Unmarshal(body, &keyVal)
	nama := keyVal["nama"]
	username := keyVal["username"]
	tanggal_lahir := keyVal["tanggal_lahir"]
	nomor_telepon := keyVal["nomor_telepon"]
	email := keyVal["email"]
	password := keyVal["password"]
	_, err = stmt.Exec(nama, username, tanggal_lahir, nomor_telepon, email, password, params["id"])
	if err != nil {
		panic(err.Error())
	}
	fmt.Fprintf(w, "Quest with ID = %s was updated",
		params["id"])
}

// View Profile by ID
func GetUsers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	params := mux.Vars(r)
	result, err := db.Query("SELECT id, nama, username, tanggal_lahir, nomor_telepon, email, password FROM user WHERE id = ?", params["id"])
	if err != nil {
		panic(err.Error())
	}
	defer result.Close()
	var user User
	for result.Next() {
		err := result.Scan(&user.ID, &user.Nama, &user.Username, &user.Tanggal_Lahir, &user.Nomor_Telepon, &user.Email, &user.Password)
		if err != nil {
			panic(err.Error())
		}
	}
	json.NewEncoder(w).Encode(user)
}

// Register
func Register(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	stmt, err := db.Prepare("INSERT INTO user(nama, username, tanggal_lahir, nomor_telepon, email, password) VALUES(?,?,?,?,?,?)")
	if err != nil {
		panic(err.Error())
	}
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err.Error())
	}
	keyVal := make(map[string]string)
	json.Unmarshal(body, &keyVal)
	nama := keyVal["nama"]
	username := keyVal["username"]
	tanggal_lahir := keyVal["tanggal_lahir"]
	nomor_telepon := keyVal["nomor_telepon"]
	email := keyVal["email"]
	password := keyVal["password"]
	_, err = stmt.Exec(nama, username, tanggal_lahir, nomor_telepon, email, password)
	if err != nil {
		panic(err.Error())
	}
	fmt.Fprintf(w, "New account was created")
}

// Login
func Login(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err.Error())
	}
	keyVal := make(map[string]string)
	json.Unmarshal(body, &keyVal)
	username := keyVal["username"]
	password := keyVal["password"]
	result, err := db.Query("SELECT id, nama, username, email, password FROM user WHERE username = ? and password = ?", username, password)
	if err != nil {
		panic(err.Error())
	}
	defer result.Close()
	var user User
	for result.Next() {
		err := result.Scan(&user.ID, &user.Nama, &user.Username, &user.Email, &user.Password)
		if err != nil {
			panic(err.Error())
		}
	}
	json.NewEncoder(w).Encode(user)
}

/*============== FOR LOGIN REGISTER ===============*/
type User struct {
	ID            int    `json:"id"`
	Nama          string `json:"nama"`
	Username      string `json:"username"`
	Tanggal_Lahir string `json:"tanggal_lahir"`
	Nomor_Telepon int    `json:"nomor_telepon"`
	Email         string `json:"email"`
	Password      string `json:"password"`
}

// Db configuration
var db *sql.DB
var err error

func InitDB() {
	db, err = sql.Open("mysql", "root:@tcp(127.0.0.1:3306)/lebaktravel")
	if err != nil {
		panic(err.Error())
	}
}

/***************************************************/

// CORSRouterDecorator applies CORS headers to a mux.Router
type CORSRouterDecorator struct {
	R *mux.Router
}

func (c *CORSRouterDecorator) ServeHTTP(rw http.ResponseWriter,
	req *http.Request) {
	if origin := req.Header.Get("Origin"); origin != "" {
		rw.Header().Set("Access-Control-Allow-Origin", origin)
		rw.Header().Set("Access-Control-Allow-Methods",
			"POST, GET, OPTIONS, PUT, DELETE")
		rw.Header().Set("Access-Control-Allow-Headers",
			"Accept, Accept-Language,"+
				" Content-Type, YourOwnHeader")
	}
	// Stop here if its Preflighted OPTIONS request
	if req.Method == "OPTIONS" {
		return
	}

	c.R.ServeHTTP(rw, req)
}
