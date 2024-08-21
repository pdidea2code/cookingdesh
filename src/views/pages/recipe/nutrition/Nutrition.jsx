import { Button, IconButton } from '@mui/material'
import MUIDataTable from 'mui-datatables'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as Icons from '@mui/icons-material'
import { ToastContainer, toast } from 'react-toastify'
import swal from 'sweetalert'
import { deleteMultipleNutrition, deleteNutrition, getRecipeWiseNutrition } from 'src/redux/api/api'

const Nutrition = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const [dataTableData, setDataTable] = useState([])
  console.log('NutState' + state.id)

  const nutritionList = async () => {
    try {
      const res = await getRecipeWiseNutrition(state.id)
      // console.log(res)
      const transformedData = res.data.info.map((nutrition) => ({
        ...nutrition,
        recipeId: nutrition.recipeid, // Adjust field name to match data
      }))
      setDataTable(transformedData)
    } catch (err) {
      console.log(err)
      if (!err.response.data.success) {
        if (err.response.data.status === 401) {
          toast.error(err.response.data.message)
        } else {
          toast.error(err.response.data.message || 'Something went wrong!')
        }
      }
    }
  }

  useEffect(() => {
    nutritionList()
  }, [])

  const columns = [
    {
      name: 'name',
      label: 'Name',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'amount',
      label: 'Amount',
      options: {
        filter: true,
        sort: true,
      },
    },

    {
      name: '_id',
      label: 'Action',
      options: {
        customBodyRender: (value) => {
          return (
            <div>
              <Icons.EditRounded
                className="editButton"
                onClick={() => {
                  const editData = dataTableData.find((data) => data._id === value)
                  console.log(editData)
                  navigate('/Nutrition-form', {
                    state: { editData: editData },
                  })
                }}
              />
              <Icons.DeleteRounded
                className="deleteButton"
                onClick={async () => {
                  const confirm = await swal({
                    title: 'Are you sure?',
                    text: 'Are you sure you want to delete this nutrition entry? All related data will also be deleted.',
                    icon: 'warning',
                    buttons: ['No, cancel it!', 'Yes, I am sure!'],
                    dangerMode: true,
                  })
                  if (confirm) {
                    try {
                      await deleteNutrition(value)
                      toast.success('Deleted successfully!', {
                        key: value,
                      })
                      nutritionList()
                    } catch {
                      toast.error('Something went wrong!', {
                        key: value,
                      })
                    }
                  }
                }}
              />
            </div>
          )
        },
      },
    },
  ]

  const deleteMultiple = async (selectedRows) => {
    const ids = selectedRows.data.map((row) => dataTableData[row.dataIndex]._id)

    const confirm = await swal({
      title: 'Are you sure?',
      text: 'Are you sure that you want to delete the selected nutrition entries?',
      icon: 'warning',
      buttons: ['No, cancel it!', 'Yes, I am sure!'],
      dangerMode: true,
    })

    if (confirm) {
      try {
        await deleteMultipleNutrition(ids)
        toast.success('Deleted successfully!', {
          key: ids.join(','),
        })
        nutritionList()
      } catch {
        toast.error('Something went wrong!', {
          key: ids.join(','),
        })
      }
    }
  }

  const SelectedRowsToolbar = ({ selectedRows }) => {
    return (
      <div>
        <IconButton onClick={() => deleteMultiple(selectedRows)}>
          <Icons.Delete />
        </IconButton>
      </div>
    )
  }

  const options = {
    customToolbarSelect: (selectedRows, data) => (
      <SelectedRowsToolbar selectedRows={selectedRows} data={data} columns={columns} />
    ),
  }

  return (
    <>
      <ToastContainer />
      <div className="right-text">
        <Button
          variant="contained"
          size="medium"
          className="AddButton"
          onClick={() => navigate('/Nutrition-Add', { state: { id: state.id } })}
        >
          Add Nutrition
        </Button>
      </div>
      <MUIDataTable
        title={'Nutrition List'}
        data={dataTableData}
        columns={columns}
        options={options}
      />
    </>
  )
}

export default Nutrition
