package org.factoriaF5.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;
    
    @Column(name = "createdAt")
    private Date createdAt;
    
    @Column(name = "nameProduct")
    private String  nameProduct;
    
    @Column(name="isBought")
    private boolean  isBought;
    
    
    public Product(Long id, Date createdAt, String nameProduct, boolean isBought) {
        this.id = id;
        this.createdAt = createdAt;
        this.nameProduct = nameProduct;
        this.isBought = isBought;
    }
    
    public Product() {
    
    }
    
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public Date getCreatedAt() {
        return createdAt;
    }
    
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
    
    public String getNameProduct() {
        return nameProduct;
    }
    
    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }
    
    public boolean isBought() {
        return isBought;
    }
    
    public void setBought(boolean bought) {
        isBought = bought;
    }
    
    @Override
    public String toString() {
        return "Product{" +
              "id=" + id +
              ", createdAt=" + createdAt +
              ", nameProduct='" + nameProduct + '\'' +
              ", isBought=" + isBought +
              '}';
    }
    
    
    
    
}
