import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = 'https://nvniedwdxijfjgpjwqxg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52bmllZHdkeGlqZmpncGp3cXhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NDUxMzUsImV4cCI6MjA2NzEyMTEzNX0.7oU7UflADHrcaduW0m6ssBtRWRHW5alaT9wemeR7UO8'
const supabase = createClient(supabaseUrl, supabaseKey)

async function fetchData() {
    const { data, error } = await supabase.from('kullanicilar').select('*').range(5, 8);

    if(error){
        console.error(error);
    } else{
        fs.writeFile('example.txt', JSON.stringify(data, null, 2), () => {});
    }
}
fetchData();

// Kayıt çekme işlemi
// const {data, error} = await supabase.from('kullanicilar').select('*');

// Sınırlı kayıt çekme işlemi
// const {data, error} = await supabase.from('kullanicilar').select('*').limit(10);

// Kaydın belirli sütun verilerini çekme işlemi
// const {data, error} = await supabase.from('kullanicilar').select('id, isim');

// Koşullu kayıt çekme işlemi sadece eşit ihtimalleri, değerden büyük ve küçük veriler
// const {data, error} = await supabase.from('kullanicilar').select('*').eq('isim', 'alaaddin');
// const {data, error} = await supabase.from('kullanicilar').select('*').gt('yas', 18);
// const {data, error} = await supabase.from('kullanicilar').select('*').lt('yas', 18);

// Koşullu kayıt çekme işlemi içerisinde al içeren kayıtlar, (like yerine ilike küçük/büyük harf duyarsızdır)
// const {data, error} = await supabase.from('kullanicilar').select('*').like('isim', '%al%');

// range ile belirli kaydı geçip belirli kadar kayıt çekiyoruz (başlangıç ve dahil olan index, bitiş ve dahil olmayan index)
// const { data, error } = await supabase.from('kullanicilar').select('*').range(5, 8);

// yas sütununa göre büyükten küçüğe sıralama yapar
// const { data, error } = await supabase.from('kullanicilar').select('*').order('yas', { ascending: true });

// kullanıcı ekleme işlemi
/* const { data, error } = await supabase.from('kullanicilar').insert([
    {
      isim: 'Ali Can',   // Sütun adı: 'isim', değer: 'Ali Can'
      yas: 28,           // Sütun adı: 'yas', değer: 28
      email: 'ali.can@example.com'  // Sütun adı: 'email', değer: 'ali.can@example.com'
    }
  ]);
*/

// güncelleme işlemi
/* const { data, error } = await supabase.from('kullanicilar').update({
    yas: 30  // Yeni değer
  }).eq('id', 1);
*/

// kullanıcı silme işlemi
/*
const { data, error } = await supabase
  .from('kullanicilar')
  .delete()
  .eq('id', 1);
*/

// iki tablo tek sorguda çekme işlemi
/*
const { data, error } = await supabase
  .from('kullanicilar')
  .select(`
    isim,
    email,
    siparisler (
      siparis_tarihi,
      siparis_tutari
    )
  `)
  .eq('id', 1)  // Kullanıcı ID'si 1 olan kullanıcıyı seç
  .filter('siparisler.userId', 'eq', 1); // Siparişlerin userId'si 1 olanları seç
*/