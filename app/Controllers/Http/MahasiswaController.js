'use strict'
const Mahasiswa = use('App/Models/Mahasiswa')

class MahasiswaController {
  async index({request,response,view}){
    const mahasiswa = await Mahasiswa.all()

    return view.render('index',{mahasiswa:mahasiswa.rows})
  }


  create({request,response,view}){
      return view.render('TambahData')
  }
  async store({request,response,view,session}){
    const maha = new Mahasiswa()

    maha.nama = request.input('nama')
    maha.nim = request.input('nim')
    maha.prodi = request.input('prodi')
    await maha.save()

    session.flash({notification: 'Data Berhasil Disimpan'})
    return response.route('index')
  }


  async edit({request,response,view,params}){
    const id = params.id
    const mahasiswa = await Mahasiswa.find(id)

    return view.render('edit',{mahasiswa:mahasiswa})
  }

  async update({request,response,view,params,session}){
    const id =params.id
    const mahasiswa = await Mahasiswa.find(id)

    mahasiswa.nama = request.input('nama')
    mahasiswa.prodi = request.input('prodi')
    mahasiswa.nim = request.input('nim')
    await mahasiswa.save()

    session.flash({notification: 'Data Berhasil Diubah'})
    return response.route('index')
  }


  async delete({params,response,session}){
    const id = params.id
    const mahasiswa = await Mahasiswa.find(id)
    await mahasiswa.delete()

    session.flash({notification: 'Data Berhasil Dihapus'})
    return response.route('index')
  }
}

module.exports = MahasiswaController
