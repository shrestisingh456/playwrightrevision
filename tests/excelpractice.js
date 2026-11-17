// //excel reading and printing all excel values in console
// const exceljs = require("exceljs")

// async function excelread() {

//     const excelworkbook = new exceljs.Workbook()
//      await excelworkbook.xlsx.readFile("d:/OneDrive - OSI/Desktop/Excel-prac.xlsx")
//     //await excelworkbook.xlsx.readFile("C:/Users/ssingh/Downloads/Excel prac.xlsx")
//     const sheetab = excelworkbook.getWorksheet("Netflix Series")
//     sheetab.eachRow((row, rowNumber) => {
//         row.eachCell((col, columnno) => {
//             console.log(col.value)
//         })
//     })
// }

// excelread()




// const excelsheet = require("exceljs")


// async function readfile() {

//     const workbook = new excelsheet.Workbook()
//     await workbook.xlsx.readFile("C:/Users/ssingh/Downloads/Excel prac.xlsx")
//     const sheettab = workbook.getWorksheet("Netflix Series")
//     sheettab.eachRow((row, rowno) => {
//         row.eachCell((col, columnno) => {
//             if (col.value == 9.4) {
//                 console.log(rowno,columnno)
//             }

//         })
//     })

// }
// readfile()

//   const worksheet= require("exceljs")

//   async function sheet() {

//     const workbook= new worksheet.Workbook()

//  await workbook .xlsx.readFile("C:/Users/ssingh/Downloads/Excel prac.xlsx")

//  const sheettab=workbook.getWorksheet("Playwright Practice")

//  sheettab.eachRow((rows,norows)=>
// {
//     rows.eachCell((column,nocolumn)=>
//     {
//         if (column.value=="Recent releases are returned")
//         {
//             console.log(norows,nocolumn)
//         }
//     })
// })

// }

// sheet()



//   const worksheet= require("exceljs")

//   async function sheet() {

//     const workbook= new worksheet.Workbook()

//  await workbook .xlsx.readFile("C:/Users/ssingh/Downloads/Excel prac.xlsx")

//  const sheettab=workbook.getWorksheet("Netflix Series")
//    const expectedrow=5
//    const expectedcolum=6
//  sheettab.eachRow((rows,norows)=>
// {
//     rows.eachCell((column,nocolumn)=>
//     {
//         if (norows==expectedrow && nocolumn==expectedcolum)
//         {
//             console.log (column.value)
//         }
//     })
// })

// }

// sheet()



// const sheet =require ('exceljs')

// async function excel()
// {
// const worksheet =new sheet.Workbook()
// await worksheet.xlsx.readFile("C:/Users/ssingh/Downloads/download.xlsx")

// const tabname=worksheet.getWorksheet("Sheet1")
// tabname.eachRow((row,rowno)=>
// {
// const col2=row.getCell(2).value
// const col3= row.getCell(3).value
// {
//  if (col2 == "Kivi" && col3 =="Green" )
//  {
//     console.log(rowno,2)
//     console.log(rowno,3)
//  }

// }

// }
// )}

// excel()


// const workbook=require("exceljs")

// async function excelworkbook() {
//   const sheet= new workbook.Workbook()
// await sheet.xlsx.readFile("C:/Users/ssingh/Downloads/Excel prac.xlsx")
// const sheettab=sheet.getWorksheet("Netflix Series")
// sheettab.eachRow((row,rowno)=>

//   {
//       console.log(row.getCell(1).value)
//   })

//  }
//  excelworkbook()


// const sheet = require("exceljs")

// async function excel() {

//   const workexcel = new sheet.Workbook()
//   await workexcel.xlsx.readFile("C:/Users/ssingh/Downloads/Excel prac.xlsx")

//   const sheettab = workexcel.getWorksheet("Netflix Series")
//   sheettab.eachRow((row, rowno) => {
//     if (row.getCell(1).value == "Wednesday") {
//       console.log(row.getCell(3).value)
//       console.log(row.getCell(4).value)
//       console.log(row.getCell(6).value)
//       console.log(row.getCell(1).value)

//     }
//   })
// }
//   excel();


// const sheet = require("exceljs")

// async function workbook() {

//   const worksheet = new sheet.Workbook()
//   await worksheet.xlsx.readFile("C:/Users/ssingh/Downloads/Excel prac.xlsx")
//   const tab = worksheet.getWorksheet("Netflix Series")
//   tab.eachRow((row, rowno) => {
//     if (row.getCell(3) >= 7) {
//       console.log(row.getCell(1).value)
//     }

//   })


// }
// workbook()


//update excel 


// const worksheet = require("exceljs")
// async function excelsheet() {

//     const sheet = new worksheet.Workbook()
//     await sheet.xlsx.readFile("C:/Users/ssingh/Downloads/Excel prac.xlsx")
//     const sheetab = sheet.getWorksheet("Netflix Series")
//     sheetab.eachRow((row, rowno) => {

//         row.eachCell((col, columnno) => {
//             if (col.value == "BoJack Horseman") {
//                 console.log(rowno, columnno)
//             }
//         })
//     }
//     )

//    const result =  sheetab.getCell(13,1)
//    result.value = "the frost"
//    sheet.xlsx.writeFile("C:/Users/ssingh/Downloads/Excel prac.xlsx")


// }

// excelsheet()


// const worksheet = require("exceljs")

// async function workbook() {
//    let output=
//    {
//     rownumber:0,
//     columnnumber:0
//    }
//     const sheet = new worksheet.Workbook()
//     await sheet.xlsx.readFile("C:/Users/ssingh/Downloads/Excel prac.xlsx")
//     const sheettab = sheet.getWorksheet("Netflix Series")
//     sheettab.eachRow((row, rowno) => {
//         row.eachCell((col, columnno) => {
//             if (col.value == "Breaking Bad") {
//                 // console.log(rowno, columnno)
//                 output.rownumber=rowno
//                 output.columnnumber=columnno

//             }
//         })
//     })

//     const result = sheettab.getCell(output.rownumber,output.columnnumber)
//     result.value = "Horror thriller"
//     console.log(result.value)
//     sheet.xlsx.writeFile("C:/Users/ssingh/Downloads/Excel prac.xlsx")

// }
// workbook()


// const workbook=require("exceljs")

// async function sheet() {

//     let object=
//     {
//         rownumber:0,
//         columnnumber:0
//     }

//     const excel= new workbook.Workbook()
//     await  excel.xlsx.readFile("C:/Users/ssingh/Downloads/Excel prac.xlsx")
//     const sheetab= excel.getWorksheet("Playwright Practice")
//     sheetab.eachRow((row,rowno)=>
//     {
//         row.eachCell((cell,columnno)=>
//         {
//             if (cell.value=="Validation / assertions")
//             {
//                object.rownumber=rowno
//                object.columnnumber=columnno
//             }
//         })
//     })

//     const result=sheetab.getCell(object.rownumber,object.columnnumber)
//     result.value =" Testing /assertions"
//     await excel.xlsx.writeFile("C:/Users/ssingh/Downloads/Excel prac.xlsx")

// }

// sheet()



const workbook = require("exceljs")

async function sheet() {

    let object = {
        rownumber: 0,
        columnnumber: 0

    }

    const sheet = new workbook.Workbook()
    await sheet.xlsx.readFile("C:/Users/ssingh/Downloads/Excel prac.xlsx")
    const sheettab = sheet.getWorksheet("Netflix Series")
    sheettab.eachRow((row, rowno) => {
        row.eachCell((col, columnno) => {
            if (col.value == 58) {
                object.rownumber = rowno
                object.columnnumber = columnno
            }
        })

    })

    const result = sheettab.getCell(object.rownumber, object.columnnumber)
    result.value = 60
    console.log(result.value)
    sheet.xlsx.writeFile("C:/Users/ssingh/Downloads/Excel prac.xlsx")


}
sheet()






























